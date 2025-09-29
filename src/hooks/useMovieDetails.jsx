// importa hooks do React
import { useEffect, useState } from "react";
// importa axios para fazer requisições HTTP
import axios from "axios";

// define um hook customizado que recebe o imbdID do filme
export function useMovieDetails(imbdID) {
    // estado para guardar os detalhes do filme
    const [details, setDetails] = useState(null);
    // estado de carregamento (inicia true porque ainda não buscou nada)
    const [loading, setLoading] = useState(true);
    // estado para mensagens de erro
    const [error, setError] = useState(null);

    // useEffect roda sempre que o imbdID mudar
    useEffect(() => {
        // se não existir imbdID, não faz nada
        if (!imbdID) return;

        // função interna assíncrona que busca os detalhes do filme
        async function fetchDetails() {
            setLoading(true);   // marca que começou a carregar
            setError(null);     // reseta erro anterior
            try {
                // faz requisição na API OMDb, encodeURIComponent protege caracteres estranhos no ID
                const response = await axios.get(`
                    https://www.omdbapi.com/?apikey=e476dca&i=${encodeURIComponent(imbdID)}`
                );
                // guarda os dados recebidos no estado details
                setDetails(response.data);
            } catch (err) {
                // se der erro, salva a mensagem no estado error
                setError(err.message);
            } finally {
                // sempre executa no fim: marca carregamento como falso
                setLoading(false);
            }
        }
        // chama a função para buscar os detalhes
        fetchDetails();
    }, [imbdID]); // dependência: só roda quando imbdID muda

    // retorna os dados do hook para quem for usar
    return { details, loading, error };
}

// exporta o hook para ser usado em outros arquivos

