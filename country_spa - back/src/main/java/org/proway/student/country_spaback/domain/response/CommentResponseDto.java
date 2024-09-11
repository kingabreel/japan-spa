package org.proway.student.country_spaback.domain.response;

import java.time.LocalDateTime;
import java.util.UUID;

public record CommentResponseDto (UUID id, String commentText, LocalDateTime createdAt, String cityName, String userName) {
}
