# Course Generation

This part of the repository works in tandem with the Fetching Data part. We take as an input the fetched data and output the entire folder which will be used as to set up the JetBrains Academy course. 

## The Pipeline

This pipeline itself is currently split into the following steps:

TODO: Add the pipeline image on how the pipeline is split and explain each step very quickly.

The entire pipeline can be found in the [gen_course.ipynb](./gen_course.ipynb) notebook, where each step is shown and explained in depth,

TODO: Maybe write a .py file about the database as a script to be run, so it's more easily usable than a notebook.

## Prompting

A big part of this pipeline is the use of GenAI to generate the task descriptions as well as some lesson structures. For that purpose, I tried to find a good prompt by testing many different ones. All my tests can be found in the [prompt_testing.ipynb](./prompt_testing.ipynb) notebook, where everything is explained in depth.