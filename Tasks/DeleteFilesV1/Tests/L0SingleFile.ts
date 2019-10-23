import tmrm = require('azure-pipelines-task-lib/mock-run');
import path = require('path');

let taskPath = path.join(__dirname, '..', 'deleteFiles.js');
let tmr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);

const testRoot: string = path.join(__dirname, "test_structure", "singleFile");

tmr.setInput('Contents', 'A/test.txt');
tmr.setInput('SourceFolder', testRoot);

tmr.run(true);