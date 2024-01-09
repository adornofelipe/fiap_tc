async function teste () {
    const supabaseUrl = ''; // Substitua pelo URL do seu projeto Supabase
    const supabaseKey = ''; // Substitua pela sua chave do Supabase
    
    const table = ''; // Substitua pelo nome da sua tabela
    
    fetch(`${supabaseUrl}/${table}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then(data => {
        // Faça algo com os dados retornados pelo Supabase
        console.log(data);
      })
      .catch(error => {
        // Tratar erros
        console.error('Erro:', error);
      });
    }    
