select * from rooms
where room_id like $1 
or room_id like $2;