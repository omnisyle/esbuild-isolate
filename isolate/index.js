import main from 'step_main';

function run() {
  console.log("Running");
  const output = main({ foo: "test", bar: "run" });

  console.log(output);
  console.log("Return");
}

run();
