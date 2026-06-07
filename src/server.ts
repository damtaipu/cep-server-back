import App from './app';

const DEFAULT_PORT = 3000;

function parsePort(value: string | undefined): number {
    if (!value) {
        return DEFAULT_PORT;
    }

    const parsedPort = Number(value);
    return Number.isInteger(parsedPort) && parsedPort > 0 ? parsedPort : DEFAULT_PORT;
}

const port = parsePort(process.env.PORT);

App.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});
