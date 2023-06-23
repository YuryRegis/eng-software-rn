type ControlledFieldProps = {
  name: string;
  title: string;
  placeHolder: string;
  error: {
    required?: string;
    invalid?: string;
    minimunLength?: string;
  };
};

type RadioButtonsProps = {
  title: string;
  value: string;
};

export interface IEditProfileStrings {
  title: string;
  form: {
    userName: ControlledFieldProps;
    lastName: ControlledFieldProps;
    birthday: ControlledFieldProps;
    university: ControlledFieldProps;
    course: ControlledFieldProps;
    profileType: {
      name: string;
      options: RadioButtonsProps[];
      error: {
        required: string;
        invalid: string;
      };
    };
    period: ControlledFieldProps;
  };
  confirmBtn: string;
  sendBtn: string;
}

const EDIT_PROFILE_STRINGS = {
  "pt-BR": {
    title: "EDITAR PERFIL",
    form: {
      userName: {
        name: "user-name",
        title: "Nome",
        placeHolder: "",
        error: {
          required: "campo de nome é obrigatório",
          invalid: "formato de nome inválido",
        },
      },
      lastName: {
        name: "last-name",
        title: "Sobrenome",
        placeHolder: "",
        error: {
          required: "campo de sobrenome é obrigatório",
          invalid: "formato de sobrenome inválido",
        },
      },
      birthday: {
        name: "birthday",
        title: "Data de Nascimento",
        placeHolder: "AAAA-MM-DD",
        error: {
          required: "campo obrigatório",
          invalid: "formato de data inválido",
        },
      },
      profileType: {
        name: "profile-type",
        options: [
          {
            title: "Sou prestador de serviço",
            value: "provider",
          },
          {
            title: "Sou contratante",
            value: "contractor",
          },
        ],
        error: {
          required: "escolha uma opção",
          invalid: "campo inválido",
        },
      },
      university: {
        name: "university",
        title: "Universidade",
        placeHolder: "Selecione uma universidade",
        error: {
          required: "campo obrigatório",
          invalid: "nome de universidade inválido",
        },
      },
      course: {
        name: "course",
        title: "Curso",
        placeHolder: "Selecione um curso",
        error: {
          required: "campo de curso é obrigatório",
          invalid: "nome de curso inválido",
        },
      },
      period: {
        name: "period",
        title: "Periodo",
        placeHolder: "",
        error: {
          required: "campo periodo é obrigatório",
          invalid: "campo de periodo inválido",
        },
      },
      sendBtn: "Enviar",
      confirmBtn: "Entrar",
    },
  },
  "en-US": {
    title: "EDIT PROFILE",
    form: {
      userName: {
        name: "user-name",
        title: "First Name",
        placeHolder: "",
        error: {
          required: "first name field is required",
          invalid: "must be a valid name",
        },
      },
      lastName: {
        name: "last-name",
        title: "Last Name",
        placeHolder: "",
        error: {
          required: "last name is required",
          invalid: "must be a valid name",
        },
      },
      birthday: {
        name: "birthday",
        title: "Birthday",
        placeHolder: "YYYY/MM/DD",
        error: {
          required: "birthday is required",
          invalid: "must be a valid birthday",
        },
      },
      profileType: {
        name: "profile-type",
        options: [
          {
            title: "I`m service provider",
            value: "provider",
          },
          {
            title: "I`m contractor",
            value: "contractor",
          },
        ],
        error: {
          required: "please select your profile type",
          invalid: "must be a valid option",
        },
      },
      university: {
        name: "university",
        title: "University",
        placeHolder: "Select a university",
        error: {
          required: "university is required",
          invalid: "must be a valid university",
        },
      },
      course: {
        name: "course",
        title: "Course",
        placeHolder: "Select a course",
        error: {
          required: "course is required",
          invalid: "must be a valid course",
        },
      },
      period: {
        name: "period",
        title: "Period",
        placeHolder: "",
        error: {
          required: "Period is required",
          invalid: "must be a valid period",
        },
      },
      sendBtn: "Submit",
      confirmBtn: "Submit",
    },
  },
};

export default EDIT_PROFILE_STRINGS;
