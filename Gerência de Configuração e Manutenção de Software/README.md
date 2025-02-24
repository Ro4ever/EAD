# Playwright Excel Automation - Bug Fix

## 📋 Descrição
Automação de preenchimento de formulários usando **Playwright** e dados de um arquivo **Excel**. Este projeto corrige um bug onde os campos **Nome** e **Sobrenome** estavam invertidos durante o preenchimento.

---

## 🚨 Problema Identificado
O robô preenchia o campo **"Nome"** com o **sobrenome** e o campo **"Sobrenome"** com o **nome**. Em um ambiente de produção, isso poderia resultar em dados corrompidos, retrabalho e perda de integridade dos registros.

**Exemplo de erro:**
- **Entrada esperada:** Nome = João, Sobrenome = Silva  
- **Resultado incorreto:** Nome = Silva, Sobrenome = João

---

## 🛠️ Solução Aplicada
- **Correção da lógica:** Ajustados os índices no script Python para que o robô leia as colunas corretas do Excel.
  - Antes:
    ```python
    nome = 2
    sobrenome = 1
    ```
  - Depois:
    ```python
    nome = 1
    sobrenome = 2
    ```

- **Validações adicionais:**  
  Adicionada uma verificação para garantir que os campos essenciais não estejam vazios antes do envio dos dados.

---

## ⚙️ Tecnologias Utilizadas
- **Linguagem:** Python 3.x  
- **Automação Web:** Playwright  
- **Manipulação de Excel:** xlwings  
- **Controle de Versão:** Git  

---

## 🚀 Como Executar

### 1️⃣ **Clonar o repositório:**
```bash
git clone <URL>
cd playwright_excel_bugfix
```

### 2️⃣ **Baixar o Arquivo Excel:**
Faça o download do arquivo **`challenge.xlsx`** disponível no repositório.  
Salve o arquivo na área de trabalho em:  
```bash
C:\Users\<SEU_USUARIO>\OneDrive\Área de Trabalho\challenge.xlsx
```

### ⚠️ Observação:
Certifique-se de que o caminho para o arquivo esteja correto. Caso deseje alterar o local do arquivo, ajuste o caminho no código Python.

### 3️⃣ **Criar e ativar o ambiente virtual:**
```bash
python -m venv venv
# Ative o ambiente:
source venv/bin/activate  # Linux/Mac
venv\\Scripts\\activate   # Windows
```

### 4️⃣ **Instalar as dependências:**
```bash
pip install playwright xlwings
playwright install
```

### 5️⃣ **Executar o script:**
```bash
python script.py
```