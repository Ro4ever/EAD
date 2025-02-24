from playwright.sync_api import Playwright, sync_playwright
import xlwings as xw
import os
import time

def ler_dados_da_coluna(planilha, coluna, linha):
    # Ler os dados da coluna na linha específica
    dado = planilha.range((linha, coluna)).value
    return dado

def run(playwright: Playwright) -> None:
    # Caminho do arquivo Excel
    # Utilize fr"C:\Users\{os.getlogin()}\Desktop\challenge.xlsx" caso não funcione
    file_path = fr"C:\Users\{os.getlogin()}\OneDrive\Área de Trabalho\challenge.xlsx"

    # Abrir o arquivo Excel
    wb = xw.Book(file_path)
    planilha = wb.sheets.active

    # Determinar a última linha preenchida na coluna 'A'
    linha_inicial = 2
    ultima_linha = planilha.range('A2').end('down').row

    # Índices das colunas
    nome = 2
    sobrenome = 1
    empresa = 3
    cargo = 4
    endereco = 5
    email = 6
    telefone = 7

    browser = playwright.chromium.launch(headless=False, executable_path=r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe")
    context = browser.new_context()
    page = context.new_page()
    page.goto("https://rpachallenge.com/")
    page.get_by_role("button", name="Start").click()

    for linha in range(linha_inicial, ultima_linha + 1):
        # Preenchendo os campos na página
        page.locator("//input[@ng-reflect-name='labelFirstName']").fill(str(ler_dados_da_coluna(planilha, nome, linha)))
        page.locator("//input[@ng-reflect-name='labelLastName']").fill(str(ler_dados_da_coluna(planilha, sobrenome, linha)))
        page.locator("//input[@ng-reflect-name='labelEmail']").fill(str(ler_dados_da_coluna(planilha, email, linha)))
        page.locator("//input[@ng-reflect-name='labelPhone']").fill(str(ler_dados_da_coluna(planilha, telefone, linha)).replace(".0",""))
        page.locator("//input[@ng-reflect-name='labelAddress']").fill(str(ler_dados_da_coluna(planilha, endereco, linha)))
        page.locator("//input[@ng-reflect-name='labelCompanyName']").fill(str(ler_dados_da_coluna(planilha, empresa, linha)))
        page.locator("//input[@ng-reflect-name='labelRole']").fill(str(ler_dados_da_coluna(planilha, cargo, linha)))
        page.get_by_role("button", name="Submit").click()
           
    resultado = page.locator("//*[@class='message2']").text_content()
    print(resultado)
    wb.close()
    time.sleep(60)
    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
