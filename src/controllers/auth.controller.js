import { generateToken } from "../utils/token-generator.js";
import bcrypt from 'bcrypt';


const default_user = {
    id: 1,
    email: "user@email.com"
    //password: "strongPass123"
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    //Se debe verificar las credenciales del usuario, se utilizo HASH con bcrypt 

    const isMatch = bcrypt.compare(password, process.env.ADMIN_PASS_HASH);

    //Ejemplo de usuario autenticado
    const user = { id: 1, email };

    if (email === default_user.email && isMatch) {
        const token = generateToken(user);
        res.json({ token });
    } else {
        res.sendStatus(401);
    }
}