# Team-Profile-Generator

![profile generator](https://user-images.githubusercontent.com/57078118/75004969-de24a000-543a-11ea-94dd-cf7183efc340.gif)

# Purpose of the application
This NodeJS CLI application ultimate goal is to generate HTML code for a team based on input from the user.

The finished page will provide a file in the output directory. When rendering this code, the intention is to display the information for each team member using the validated description from the user.

# Functionality
The application will take the user through a series of questions.

The program will ask the following information

For the manager: Name, ID, email address, and office number.
For each engineer: Name, ID, email address, and Github name.
For each intern: Name, ID, email address, and school.
The name has to be alphabetic characters only, with a length of between three and 10 Characters.

The ID has to be a number between 100 (three digits) and 99999 (five digits).

The email address has to conform to RFC 5322 guidelines. Regular expressions obtained from www.emailregex.com, and supposedly effective 99.9% of the times. The application won't validate the existance of the email, which means that an email name could be valid but non-existent.

The office, Github or School can be alphanumeric with a length of between three and twenty characters. The program won't check the existance of the github or the school.



# Information returned
Information on HTML file includes the following:

Name of the team member.
ID of the team member.
E-mail address for the team member.
The forth set of data will depend on the user role. For the manager, the office number. For the engineers their github. For the interns their school.
There will be a card for each team member.
