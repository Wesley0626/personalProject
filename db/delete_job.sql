delete from jobs
where job_id = $1;

select * from jobs
where user_id=$2