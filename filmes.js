async function incluirFilme() {
    const supabaseUrl = 'https://msptakyjvoutostzipra.supabase.co/rest/v1/filmes'; //  URL do seu projeto Supabase
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zcHRha3lqdm91dG9zdHppcHJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2NDE3NTUsImV4cCI6MjAyMDIxNzc1NX0.E6x7UREzEhITGMcPW7r5qWH4laMoy8rR5sWmehPz0qs'; // chave do Supabase


  //  campos da tabela
  const titulolDigitado = document.getElementById('titulo').value;
    const descricaoDigitada = document.getElementById('descricao').value;
    const generoDigitado = document.getElementById('genero').value;
    const anolancamentoDigitado = document.getElementById('anoLancamento').value;
    const imagemDigitada = document.getElementById('imagem').value;
  // Valida a chave do Supabase antes de fazer a solicitação
 
  //valida campos preenchido

// url do supabase com tabela incluida, e no body os dados que foram digitados no html
  try {
    const response = await fetch(supabaseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
      },
      body: JSON.stringify({
        titulo:titulolDigitado,
        descricao: descricaoDigitada,
        genero: generoDigitado,
        anolancamento: anolancamentoDigitado,
        imagem:imagemDigitada}),
    });

    if (response.status === 201) {
        console.log('POST concluído com sucesso (Status 201 Created)')
        alert('Filme Incluido');
      } else if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
      }
    
      // Aguarde até que a requisição esteja concluída
      const textResponse = await response.text();
    
      // Se a resposta não estiver vazia, faça o log
      if (textResponse.trim() !== '') {
        console.log('Resposta:', textResponse);
      }
    } catch (error) {
      console.error('Erro na requisição:', error.message);
    }}