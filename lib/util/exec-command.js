const { spawn } = require("child_process");

function execCommand(...arg) {
  return new Promise((resolve) => {
    // 1.开启子进程执行命令
    const childProcess = spawn(...arg)

    //监听子进程
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)

    childProcess.stdout.on('close',()=>{
      resolve()
    })
  });
}

module.exports = execCommand
