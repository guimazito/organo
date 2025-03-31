# Usa uma imagem base oficial do Python
FROM python:3.12

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto para dentro do container
COPY . /app

# Instala as dependências do projeto
RUN pip install --no-cache-dir --upgrade pip && \
    pip install -r backend/app/requirements.txt

# Expõe a porta usada pelo FastAPI
EXPOSE 8000

# Comando para rodar o FastAPI com Uvicorn
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]