select * from jobs
where working_id = $1 and completed is null;