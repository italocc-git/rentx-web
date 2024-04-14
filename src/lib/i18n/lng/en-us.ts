export default {
  translation: {
    components: {
      header: {
        title: {
          profile: 'Profile',
          filter: 'Filter',
          home: 'Home',
        },
        loginText: 'Sign in',
      },
      card: {
        body: {
          perDay: 'PER DAY',
          rentalPeriod: 'RENTAL PERIOD',
        },
      },
    },
    pages: {
      presentationContent: {
        title: 'Rent a car with easy and fast way',
        description: 'Many models to you drive safe, with confort and safety',
        button_text: 'Start now',
      },
      listContent: {
        home: {
          availableCars: {
            title: 'Available Cars',
            description1: 'Total ',
            description2: 'cars',
          },
          car: {
            header: {
              perDay: 'PER DAY',
            },
            body: {
              tabComponent: {
                tab1: 'ABOUT THE CAR',
                tab2: {
                  title: 'PERIOD',
                  calendar: {
                    from: 'FROM',
                    to: 'TO',
                  },
                  totalRent: {
                    dailyRent: 'daily',
                  },
                },
              },
            },
            footer: {
              buttonTitle: 'Choose rental period',
              rentButton: {
                userLogged: 'Rent now',
                userNotLogged: 'Sign in to rent',
              },
            },
          },
        },

        filteredCars: {
          title: 'Cars founded',
          dateContent: {
            from: 'FROM',
            to: 'TO',
          },
          drawerComponent: {
            title: 'Filter',
            carNamePlaceholder: 'Which car do you want ?',
            pricePerDayTitle: 'Price per day',

            fuel: {
              title: 'Fuel',
              radio: {
                op1: 'Gasoline',
                op2: 'Electric',
                op3: 'Alcohol',
              },
            },
            transmission: {
              title: 'Transmission',
              radio: {
                op1: 'Automatic',
                op2: 'Manual',
              },
            },
            button: {
              submitText: 'Filter results',
              clearText: 'Clear data',
            },
          },
        },
        successfulRented: {
          title: 'Car Rented!',
          description:
            ' Now you just need to go to the RentX dealership to pick up your car.',
        },
      },
      filterByDate: {
        title: 'Choose a rental start and end Date',
        dateContent: {
          from: 'FROM',
          to: 'TO',
        },
        buttonText: 'Confirm',
      },
      profileContent: {
        signIn: {
          title: 'We almost there.',
          description: 'Log in to start an incredible experience.',
          inputText: {
            password: 'Password',
            email: 'E-mail',
          },
          buttonText: {
            signIn: 'Login',
            signUp: 'Create free Account',
          },
        },
        signUp: {
          title: 'Create Account',
          description: 'Register your account quickly and easily.',
          textFields: {
            name: 'Name',
            email: 'E-mail',
            driverLicense: "Driver's License",
            pass: 'Password',
            confirmPassword: 'Confirm you Password',
          },
          buttonText: 'Sign Up',
          modal: {
            accountCreatedText: 'Account created',
            description: {
              description1: 'You are now part of RentX.',
              description2: 'Welcome',
            },
            buttonText: 'Ok',
          },
        },
        account: {
          profileSection: {
            personalData: {
              personalInfo: 'Personal Info',
              changePass: 'Change Password',
            },
            passwordInformation: {
              currentPass: 'Current Password',
              newPass: 'New Password',
              confirmNewPass: 'Confirm your Password',
              buttonText: 'Save changes',
              modal: {
                title: 'Done!',
                description1: 'Your information has now been updated.',
                description2: 'Attention: Sign In with your new password!',
                confirmationText: 'Ok',
              },
            },
          },
          scheduleSection: {
            title: 'Scheduled cars',
            card: {
              perDay: 'Per Day',
              rentalPeriod: 'RENTAL PERIOD',
            },
          },
        },
      },
    },
  },
}
