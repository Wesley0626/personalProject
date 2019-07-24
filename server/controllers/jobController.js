module.exports = {
  async getJobs(req, res){
    let {userId } = req.params
    const db = req.app.get('db')
    let jobs = await db.get_jobs(+userId)
    res.send(jobs)
  },
  async deleteJob(req, res){
    let {jobId} = req.params
    const db = req.app.get('db')
    let  jobs = await db.delete_job([+jobId, req.session.user.id])
    res.send(jobs)
  },
  async editJob(req, res){
    let {jobId} = req.params
    let{newTask, newCategory, newSize, newTools, newFinishHour, newFinishMinute, newAmOrPm, newFinishDay, newFinishMonth, newPayout } = req.body
    const db = req.app.get('db')
    let jobs = await db.edit_job([
      +jobId,
      newTask,
      newCategory,
      newSize,
      newTools,
      newFinishHour,
      newFinishMinute,
      newAmOrPm,
      newFinishDay, 
      newFinishMonth,
      newPayout,
      req.session.user.id
    ])
    res.send(jobs)
  },
  async saveJob(req, res){
    console.log("req", req.session.user)
    let {task, category, size, tools, finishHour, finishMinute, amOrPm, finishDay, finishMonth, payout} = req.body
    const db = req.app.get('db')
    let jobs = await db.save_jobs([task, category, size, tools, +finishHour, +finishMinute, amOrPm, +finishDay, finishMonth, +payout, req.session.user.id])
    res.send(jobs)
  }
}