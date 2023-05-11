Created: 2/1/23
Revised: 5/11/23

When starting a new project on an M1 Mac:

    MAKE SURE GH IS INSTALLED VIA HOMEBREW

    1.0 Create a directory with the project number
        1.1 Helpful to have a shortcut to the Jobs Directory in the root directory for the project
        
    2.0 Clone the contents of the library to 'emails' directory using GH
        2.1 gh repo clone science-is-cool/newlayout emails

    3.0 Copy (don't move) the node_modules directory from 'User/Documents/Emails/_core node' to emails directory within the current project.
        3.1 Be sure to move this back to the core node directory at the completion of the project.

    4.0 Copy finalized files to the appropriate jobs folder
        4.1 Copy 'dist' directory to '(Job)/Dev/dist'
            4.1.1 index.html file not necessary as this is just the list of languages
        4.2 Copy 'emails' directory to '(Job)/Dev/emails'
            4.2.1 Do NOT include 'node_modules' or 'dist' directories
            4.2.2 Be sure to include hidden files. To unhide them in Finder, use the keyboard shortcut 'Cmd+Shift+Period(.)'