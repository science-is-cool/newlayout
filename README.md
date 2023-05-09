Created: 2/1/23
Revised: ---

When starting a new project on an M1 Mac:

    1.0 Copy all files from the 'Emails/_core files' directory into a new project folder under 'Emails/_projects/<year>'.

    2.0 Copy (don't move) the node_modules directory from 'Emails/_core node' to wherever the current project is located.
        2.1 be sure to move this back to the core node directory at the completion of the project.

    3.0 Copy any associated files from the 'Emails/_updates/' directory into the associated directories (i.e. src/partials).

    4.0 Copy the 'src' directory from the corresponding template under 'Emails/_templates'.

    5.0 To correct the display errors, insert the following code beneath '.btn-group {}' on line 44 of 'src/assets/scss/_custom.scss'.
        table.container {
            &.pre-header, &.header, &.footer-wrap {
                background-color: transparent;
            }
            &.pre-header {
                margin-top: 10px;
            }
        }