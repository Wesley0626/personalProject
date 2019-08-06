insert into messages(content, message_user_id, message_room_id)
values($1, $3, $2);

select * from messages 
where message_room_id = $2;