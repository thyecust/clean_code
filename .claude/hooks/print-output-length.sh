#!/bin/bash
INPUT=$(cat)
LAST_MSG=$(echo "$INPUT" | jq -r '.last_assistant_message // ""')

# 用 jq 构造合法 JSON，输出到 stdout（必须 exit 0）
jq -n --arg len "${#LAST_MSG}" \
  '{systemMessage: ("输出长度：" + $len + " 字符")}'