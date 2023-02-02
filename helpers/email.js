import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //Informacion del email
  const info = await transport.sendMail({
    from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "Uptask - Confirma tu cuenta",
    text: "Comprueba tu cuenta en Uptask",
    html: `<p>Hola: ${nombre} Comprueba tu cuenta en Uptask</p>
    <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace: 
        <a href="${process.env.FRONTEND_URL1}/confirmar/${token}"> Comprobar Cuenta</a>
    </p>
    <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje.</p>
    `,
  });
};


export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //Informacion del email
  const info = await transport.sendMail({
    from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "Uptask - Reestablece tu Contraseña",
    text: "Comprueba tu cuenta en Uptask",
    html: `<p>Hola: ${nombre} has solicitado reestablecer tu contraseñak</p>
    <p>Dale click al siguiente enlace para generar una nueva contraseña: 
        <a href="${process.env.FRONTEND_URL1}/olvide-password/${token}"> Reestablecer contraseña</a>
    </p>
    <p>Si tu no solicitaste reestablecer tu contraseña, puedes ignorar el mensaje.</p>
    `,
  });
};
