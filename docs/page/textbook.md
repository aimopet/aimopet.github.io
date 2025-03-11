# 上手教程

## 概述
Aimopet API 提供了一系列强大的 AI 模型，可以用于自然语言处理、生成文本、翻译等任务。本教程将介绍如何使用 Aimopet API 以及各个端点的详细信息。

## 认证
所有请求都需要使用 API 密钥进行认证。

在请求头中添加以下内容：
```
Authorization: Bearer YOUR_API_KEY
```

## 基本 URL
所有 API 请求的基本 URL 为：
```
https://api.aimopet.com/v1/
```

## 端点

### 创建完成 (Completions)
生成文本的主要端点。

**请求 URL:**
```
POST /v1/completions
```

**请求头:**
```json
{
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
}
```

**请求体:**
```json
{
    "model": "text-davinci-003",
    "prompt": "你好，世界！",
    "max_tokens": 100
}
```

**响应:**
```json
{
    "id": "cmpl-6aT3b6aT3b6aT3b6aT3b6aT3b",
    "object": "text_completion",
    "created": 1610078130,
    "model": "text-davinci-003",
    "choices": [
        {
            "text": "你好，世界！今天我能帮你做些什么？",
            "index": 0,
            "logprobs": null,
            "finish_reason": "length"
        }
    ],
    "usage": {
        "prompt_tokens": 3,
        "completion_tokens": 7,
        "total_tokens": 10
    }
}
```

### 错误处理
如果请求失败，API 将返回相应的错误代码和信息。

**示例错误响应:**
```json
{
    "error": {
        "message": "无效的 API 密钥",
        "type": "authentication_error",
        "param": null,
        "code": "invalid_api_key"
    }
}
```

## 速率限制
Aimopet API 对每个 API 密钥都有速率限制。

