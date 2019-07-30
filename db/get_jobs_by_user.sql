select * from jobs
where user_id = $1 and completed = 'false' or user_id = $1 and completed is null;