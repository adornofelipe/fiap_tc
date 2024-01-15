  async function verificarLogin() {
      const supabaseUrl = 'https://msptakyjvoutostzipra.supabase.co/rest/v1/'; //  URL do seu projeto Supabase
      const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zcHRha3lqdm91dG9zdHppcHJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2NDE3NTUsImV4cCI6MjAyMDIxNzc1NX0.E6x7UREzEhITGMcPW7r5qWH4laMoy8rR5sWmehPz0qs'; // chave do Supabase

    const table = 'tusu'; //  tabela de usuários

    //  campos da tabela por ID ex que está no html
    const emailDigitado = document.getElementById('emailInput').value;
    const senhaDigitada = document.getElementById('senhaInput').value;
    // Valida a chave do Supabase antes de fazer a solicitação
   
// fetch com url do supabase + tabela e campos de comparação
    try {
      const response = await fetch(`${supabaseUrl}/${table}?email=eq.${emailDigitado}&senha=eq.${senhaDigitada}`, {
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
        console.log('Pode logar.')
          alert('Sucesso');
          location.href = "home.html";
        ;
      } else {
        alert('Usuário ou senha invalida, Não pode logar.');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  }