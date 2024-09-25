export interface Comment {
    id: string;
    commentText: string;
    createdAt: Date;
    cityName: string;
    userName: string;
}

export interface CreateCommentResponse {
    id: string;
    createdAt: Date;
    commentText: string;
}


export interface CreateComment {
    commentText: string;
    userMail: string;
    cityId: string;
}