# pip install langchain-gigachat

from langchain_core.messages import HumanMessage, SystemMessage
from langchain_gigachat.chat_models import GigaChat
from langchain.callbacks.base import BaseCallbackHandler

from sys import argv

class StreamHandler(BaseCallbackHandler):
    def __init__(self, initial_text=""):
        pass

    def on_llm_new_token(self, token: str, **kwargs) -> None:
        print(f"{token} -", end="", flush=True)
# Авторизация в GigaChat
model = GigaChat(
    credentials="NjhiZGE4YmUtN2ZiOS00YjZhLTk5N2QtMjllMjgwMjlmY2FhOjdmZjI1NDI2LTIxZTYtNDhkZi1iNjJmLTBiNzEyNDhjMmIzOQ==",
    scope="GIGACHAT_API_PERS",
    model="GigaChat",
    # Отключает проверку наличия сертификатов НУЦ Минцифры
    verify_ssl_certs=False,
    streaming=True,
    callbacks=[StreamHandler()]
)
messages = [
    SystemMessage(
        content="Ты эмпатичный бот-психолог, который помогает пользователю решить его проблемы."
    )
]
def giga(text):
    # while(True):
    #     # str1 строка с данными
    #     str1 = ""
    #     user_input = str1;
    #     messages.append(HumanMessage(content=user_input))
    #     res = model.invoke(messages)
    #     messages.append(res)
    #     print("Ответ: ", res.content)
        
        try:
            # str1 строка с данными
            user_input = text
            messages.append(HumanMessage(content=user_input))
            res = model.invoke(messages)
            messages.append(res)
            return res.content
        except Exception as e:
            print(e)
            return 0

if __name__ == '__main__':
    print(giga(argv[1]))