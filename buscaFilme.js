async function buscaFilme() {
    const supabaseUrl = 'https://msptakyjvoutostzipra.supabase.co/rest/v1/'; //  URL do seu projeto Supabase
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zcHRha3lqdm91dG9zdHppcHJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2NDE3NTUsImV4cCI6MjAyMDIxNzc1NX0.E6x7UREzEhITGMcPW7r5qWH4laMoy8rR5sWmehPz0qs'; // chave do Supabase

  const table = 'filmes'; //  tabela de usuários

  //  campos da tabela por ID ex que está no html
  const idDigitado = document.getElementById('buscaId').value;
 
 
// fetch com url do supabase + tabela e campos de comparação
  try {
    const response = await fetch(`${supabaseUrl}/${table}?id=eq.${idDigitado}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
      },
    });

    if (!response.ok) {
      throw new Error('Erro na requisição');
      
    }

    const data = await response.json();

    // Verifica se o ID existe na resposta da API
    const filme = data.length > 0;
   
    if (filme) {
      console.log (data)
        alert('Sucesso');
    } else {
      alert('identificação não encontrada.');
    }
  } catch (error) {
    console.error('Erro:', error);
  }
}