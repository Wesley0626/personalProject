update jobs
set completed = $2
where job_id = $1;

select * from jobs
where working_id is null;
