create table comment (
    id uuid primary key,
    user_id uuid,
    city_id uuid,
    comment_text text,
    created_at timestamp default now()
);