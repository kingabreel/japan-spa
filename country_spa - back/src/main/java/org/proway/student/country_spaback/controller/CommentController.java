package org.proway.student.country_spaback.controller;

import jakarta.validation.Valid;
import org.proway.student.country_spaback.domain.Comment;
import org.proway.student.country_spaback.domain.dto.CommentDto;
import org.proway.student.country_spaback.domain.response.CommentResponseDto;
import org.proway.student.country_spaback.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/comment")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @GetMapping
    public ResponseEntity<Page<CommentResponseDto>> getComments(
            @RequestParam(value = "pageNumber", defaultValue = "0") Integer pageNumber,
            @RequestParam(value = "pageSize", defaultValue = "10") Integer pageSize,
            @RequestParam(value = "city", required = false) String cityName
    ){

        return ResponseEntity.status(HttpStatus.OK).body(commentService.getComments(pageNumber, pageSize, cityName));
    }


    @PostMapping
    public ResponseEntity<Comment> addComment(@RequestBody @Valid CommentDto commentDto){
        return ResponseEntity.status(HttpStatus.OK).body(commentService.addComment(commentDto));
    }
}
