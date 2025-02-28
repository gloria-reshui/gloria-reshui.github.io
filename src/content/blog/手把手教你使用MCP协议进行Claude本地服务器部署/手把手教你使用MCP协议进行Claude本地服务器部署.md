---
title: 手把手教你使用MCP协议进行Claude本地服务器部署
description: 手把手
pubDate: 2025-02-25
heroImage: ./Pasted image 20250219202007.png
heroAlt: any
---

## 部署MCP服务器的准备

#知识管理

### MCP介绍

[Claude发布的，集中本部数据的，安全协议](https://modelcontextprotocol.io/introduction)

>Just as USB-C provides a standardized way to connect your devices to various peripherals and accessories, MCP provides a standardized way to connect AI models to different data sources and tools.
让你的本地数据像被插了C口数据线，跟LLM联动

### 入门准备

- Claude Desktop application最新桌面端软件——作为Host
- local folder本地文件夹（复制好绝对路径）
- 研读[用户文档](https://modelcontextprotocol.io/quickstart/user)


## 部署步骤

1. 在客户端的设置里打开MCP的json文件
2. 替换并检查json语法，自定义需要访问的绝对路径，注意转义
3. 下载并部署npx
4. 检查软件是否能正常链接MCP Server服务器“filesystem”
5. 学习MVP函数
6. 设计数据集成的运用场景

## 数据安全

当前环境中总共有11个MCP函数：

- read_file: 读取文件内容
- read_multiple_files: 同时读取多个文件
- write_file: 写入/覆盖文件
- edit_file: 编辑文件内容
- create_directory: 创建目录
- list_directory: 列出目录内容
- directory_tree: 获取目录树结构
- move_file: 移动/重命名文件
- search_files: 搜索文件
- get_file_info: 获取文件信息
- list_allowed_directories: 列出允许访问的目录

## 数据修改：

会修改本地数据的函数：
- create_directory: 创建新目录
- write_file: 创建新文件或覆盖现有文件
- edit_file: 修改现有文件内容
- move_file: 也会改变文件系统，因为它可以移动或重命名文件

## 数据恢复：

如果操作错误，有几种方式可以恢复数据：

- 对于OneDrive目录：
  OneDrive有版本历史功能，你可以通过OneDrive的网页界面或客户端回溯到之前的版本

- 对于本地文件目录：
  如果文件被意外修改，建议：
  1. 立即停止操作
  2. 检查Windows回收站是否有备份
  3. 使用数据恢复软件（如Recuva）尝试恢复
  4. 如果有系统还原点，可以考虑使用系统还原

建议在进行可能改变数据的操作前：
1. 备份重要文件
2. 使用edit_file的dryRun参数预览更改
3. 小心使用write_file等函数，因为它会直接覆盖现有文件


