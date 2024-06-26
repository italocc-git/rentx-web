export default {
  translation: {
    components: {
      header: {
        title: {
          profile: 'Perfil',
          filter: 'Filtro',
          home: 'Inicio',
        },
        loginText: 'Faça o login',
      },
      card: {
        body: {
          perDay: 'AO DIA',
          rentalPeriod: 'PERÍODO DO ALUGUEL',
        },
      },
    },
    pages: {
      presentationContent: {
        title: 'Alugue um carro de maneira simples e fácil',
        description:
          'Vários modelos para você dirigir seguro, com conforto e segurança',
        button_text: 'Começar agora',
      },
      listContent: {
        home: {
          availableCars: {
            title: 'Carros disponíveis',
            description1: 'Total ',
            description2: 'carros',
          },
          car: {
            header: {
              perDay: 'AO DIA',
            },
            body: {
              tabComponent: {
                tab1: 'SOBRE O CARRO',
                tab2: {
                  title: 'PERÍODO',
                  calendar: {
                    from: 'DE',
                    to: 'ATÉ',
                  },
                  totalRent: {
                    dailyRent: 'diária(s)',
                  },
                },
              },
            },
            footer: {
              buttonTitle: 'Escolher período do aluguel',
              rentButton: {
                userLogged: 'Alugar agora',
                userNotLogged: 'Faça o login para alugar',
              },
            },
          },
        },

        filteredCars: {
          title: 'Carros encontrados',
          dateContent: {
            from: 'DE',
            to: 'ATÉ',
          },
          drawerComponent: {
            title: 'Filtro',
            carNamePlaceholder: 'Qual carro você deseja?',
            pricePerDayTitle: 'Preço ao dia',

            fuel: {
              title: 'Combustível',
              radio: {
                op1: 'Gasolina',
                op2: 'Elétrico',
                op3: 'Álcool',
              },
            },
            transmission: {
              title: 'Transmissão',
              radio: {
                op1: 'Automático',
                op2: 'Manual',
              },
            },
            button: {
              submitText: 'Filtrar Resultados',
              clearText: 'Limpar Dados',
            },
          },
        },
        successfulRented: {
          title: 'Carro alugado!',
          description:
            ' Agora você só precisa ir até a concessionária da RentX pegar o seu automóvel.',
        },
      },
      filterByDate: {
        title: 'Escolha uma data de início e fim do aluguel',
        dateContent: {
          from: 'DE',
          to: 'ATÉ',
        },
        buttonText: 'Confirmar',
      },
      profileContent: {
        signIn: {
          title: 'Estamos quase lá.',
          description: 'Faça seu login para começar uma experiência incrível.',
          inputText: {
            password: 'Senha',
            email: 'E-mail',
            forgotPassoword: 'Esqueci minha senha',
          },
          buttonText: {
            signIn: 'Logar',
            signUp: 'Criar conta gratuita',
          },
        },
        signUp: {
          title: 'Crie sua conta',
          description: 'Faça seu cadastro de forma rápida e fácil.',
          textFields: {
            name: 'Nome',
            email: 'E-mail',
            driverLicense: 'CNH',
            pass: 'Senha',
            confirmPassword: 'Repetir senha',
          },
          buttonText: 'Cadastrar',
          modal: {
            accountCreatedText: 'Conta criada',
            description: {
              description1: 'Agora você faz parte da RentX.',
              description2: 'Seja bem-vindo',
            },
            buttonText: 'Ok',
          },
        },
        account: {
          profileSection: {
            toast: {
              success: 'Senha do usuário atualizada',
              avatar: 'Avatar alterado',
            },
            personalData: {
              personalInfo: 'Informações Pessoais',
              changePass: 'Mudar Senha',
            },
            passwordInformation: {
              currentPass: 'Senha atual',
              newPass: 'Nova senha',
              confirmNewPass: 'Confirme a nova senha',
              buttonText: 'Salvar alterações',
              modal: {
                title: 'Feito!',
                description1: 'Agora suas informações foram atualizadas.',
                description2: 'Atenção: Faça o login com a nova senha !',
                confirmationText: 'Ok',
              },
            },
          },
          scheduleSection: {
            title: 'Carros Agendados',
            card: {
              perDay: 'AO DIA',
              rentalPeriod: 'PERÍODO DE ALUGUEL',
            },
          },
        },
      },
      passwordRecovery: {
        emailValidationComponent: {
          errorMessage: {
            requiredField: 'Email obrigatório',
            invalidField: 'Formato de email inválido',
          },
          sendPasswordResetEmail: {
            success: 'Email de redefinição de senha enviado para : ',
            error: 'Erro inesperado , por favor tente novamente mais tarde.',
          },
          title: 'Recuperar senha',
          description: 'Insira seu email para receber um link de recuperação',
          buttonText: 'Recuperar senha',
        },
        newPasswordComponent: {
          errorMessage: {
            requiredField: 'Campo obrigatório',
            invalidMatchPasswords: 'As senhas devem ser iguais',
            regexValidation:
              'Deve conter ao menos 8 caracteres com letras maiúsculas e minúsculas, números, e caracteres especiais.',
          },

          title: 'Nova senha',
          description: 'Insira sua nova senha e confirme no campo abaixo.',
          buttonText: 'Renovar senha',
        },
      },
    },
  },
}
