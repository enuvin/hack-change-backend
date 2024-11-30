from langchain_core.messages import HumanMessage, SystemMessage
from langchain_gigachat.chat_models import GigaChat

# Авторизация в GigaChat
model = GigaChat(
    credentials="NjhiZGE4YmUtN2ZiOS00YjZhLTk5N2QtMjllMjgwMjlmY2FhOjdmZjI1NDI2LTIxZTYtNDhkZi1iNjJmLTBiNzEyNDhjMmIzOQ==",
    scope="GIGACHAT_API_PERS",
    model="GigaChat",
    # Отключает проверку наличия сертификатов НУЦ Минцифры
    verify_ssl_certs=False,
)

messages = [
    SystemMessage(
        content="Ты эмпатичный бот-психолог, который помогает пользователю решить его проблемы."
    )
]

while(True):
    user_input = input("Пользователь: ")
    if user_input == "пока":
      break
    messages.append(HumanMessage(content=user_input))
    res = model.invoke(messages)
    messages.append(res)
    print("GigaChat: ", res.content)