package org.proway.student.country_spaback.service;

import jakarta.persistence.criteria.Join;
import org.apache.coyote.BadRequestException;
import org.proway.student.country_spaback.domain.City;
import org.proway.student.country_spaback.domain.Comment;
import org.proway.student.country_spaback.domain.dto.CommentDto;
import org.proway.student.country_spaback.domain.response.CommentResponseDto;
import org.proway.student.country_spaback.repository.CityRepository;
import org.proway.student.country_spaback.repository.CommentRepository;
import org.proway.student.country_spaback.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CityRepository cityRepository;

    public Page<CommentResponseDto> getComments (Integer pageNumber, Integer pageSize, String city){
        Pageable pageable = PageRequest.of(pageNumber, pageSize);

        Specification<Comment> commentSpecification = (root, query, criteriaBuilder) -> {
            if (city != null && !city.isEmpty()) {
                Join<Comment, City> cityJoin = root.join("city");
                return criteriaBuilder.like(criteriaBuilder.lower(cityJoin.get("name")), "%" + city.toLowerCase() + "%");
            }
            return null;
        };

        Page<Comment> commentsPage = commentRepository.findAll(commentSpecification, pageable);

        List<CommentResponseDto> commentDtos = commentsPage.getContent().stream()
                .map(comment -> new CommentResponseDto(
                        comment.getId(),
                        comment.getCommentText(),
                        comment.getCreatedAt(),
                        comment.getCity().getName(),
                        comment.getUser().getName()
                ))
                .toList();

        return new PageImpl<>(commentDtos, pageable, commentsPage.getTotalElements());
    }

    public Comment addComment(CommentDto commentDto) {
        Comment comment = new Comment();

        UUID userId = UUID.fromString(commentDto.userId());
        UUID cityId = UUID.fromString(commentDto.cityId());

        var city = cityRepository.findById(cityId);
        var user = userRepository.findById(userId);

        if (city.isEmpty() || user.isEmpty()) throw new RuntimeException("User or city id doesn't exists");

        if (commentDto.commentText() == null || commentDto.commentText().length() < 5) throw new RuntimeException("Comment must have more than 5 characters");

        comment.setCommentText(commentDto.commentText());
        comment.setCreatedAt(LocalDateTime.now());
        comment.setCity(city.get());
        comment.setUser(user.get());

        return commentRepository.save(comment);
    }
}
