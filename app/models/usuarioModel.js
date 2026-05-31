class UsuarioModel {

    cadastrar(nome, email, senha) {

        const usuarios =
        JSON.parse(
            localStorage.getItem("usuarios")
        ) || [];

        usuarios.push({
            nome,
            email,
            senha
        });

        localStorage.setItem(
            "usuarios",
            JSON.stringify(usuarios)
        );
    }

    login(email, senha) {

        const usuarios =
        JSON.parse(
            localStorage.getItem("usuarios")
        ) || [];

        return usuarios.find(
            usuario =>
            usuario.email === email &&
            usuario.senha === senha
        );
    }

}

window.UsuarioModel = UsuarioModel;
