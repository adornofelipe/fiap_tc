async function buscaImagem() {
    const supabaseUrl = 'https://msptakyjvoutostzipra.supabase.co/rest/v1/filmes'; //  URL do seu projeto Supabase
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zcHRha3lqdm91dG9zdHppcHJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2NDE3NTUsImV4cCI6MjAyMDIxNzc1NX0.E6x7UREzEhITGMcPW7r5qWH4laMoy8rR5sWmehPz0qs'; // chave do Supabase


  //  campos da tabela por ID ex que está no html
  const idImagem = document.getElementById('imagem').value;
 
 
// fetch com url do supabase + tabela e campos de comparação
  try {
    const response = await fetch(`${supabaseUrl}?id=eq.${idImagem}`, {
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

    // Verifica se o nome inserido existe na resposta da API
    const logar = data.length > 0;

    if (logar) {
      console.log(data)
        alert('Sucesso');
    } else {
      alert('identificação não encontrada.');
    }
  } catch (error) {
    console.error('Erro:', error);
  }
}