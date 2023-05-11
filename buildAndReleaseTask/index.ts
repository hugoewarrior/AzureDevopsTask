import tl = require('azure-pipelines-task-lib/task');
import { exec } from 'node:child_process';

async function run() {
    try {
        exec('./scripts/init_script.sh', (err, output) => {
            if (err) {
                throw new Error("ERROR")
            }
            console.log("Process finished \n", output);
        })
    }
    catch (err: any) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();