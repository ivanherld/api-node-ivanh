import { generateToken } from "../utils/token-generator.js";

//HASHEARLO!
const default_user = {
    id: 1,
    email: "user@email.com",
    password: "strongPass123"
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    //Se debe verificar las credenciales del usuario

    //Ejemplo de usuario autenticado
    const user = { id: 1, email };

    if (email === default_user.email && password === default_user.password) {
        const token = generateToken(user);
        res.json({ token });
    } else {
        res.sendStatus(401);
    }
}