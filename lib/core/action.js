const { promisify } = require("util");
const download = promisify(require("download-git-repo"));
const program = require("commander");
const { REACT_REPO } = require("../config/repo");
const execCommand = require("../util/exec-command");

async function createProjectAction(project) {
  try {
    //第一个参数是路径
    //第二个参数是文件名称
    //第三个参数:是否克隆
    await download(REACT_REPO, project, { clone: true });
    // 2.很多的脚手架, 都是在这里给予提示
    console.log(`cd ${project}/react-project`);
    console.log(`npm install`);
    console.log(`npm run dev`);

    //开启子进程运行项目
    const commadName = process.platform === "win32" ? "npm.cmd" : "npm";

    await execCommand(commadName, ["install"], {
      cwd: `./${project}/react-project`,
    });

    await execCommand(commadName, ["run", "dev"], {
      cwd: `./${project}/react-project`,
    });
  } catch (error) {
    console.log(error, "GitHub拉取失败");
  }
}

module.exports = {
  createProjectAction,
};
