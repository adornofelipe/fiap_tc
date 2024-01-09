async function teste () {
    const supabaseUrl = 'https://pklddrmlchsmwvopaqht.supabase.co'; // Substitua pelo URL do seu projeto Supabase
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrbGRkcm1sY2hzbXd2b3BhcWh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4NjgzOTcsImV4cCI6MjAxOTQ0NDM5N30.VhBhznFm6cLrGLeINrRD0nLHmXmYDmSGXbxOrb7-Nlc'; // Substitua pela sua chave do Supabase
    
    const table = 'cliente'; // Substitua pelo nome da sua tabela
    
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
