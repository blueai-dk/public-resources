# Task Description for Full Stack Setup

## Overview

The goal of this task is to create a simple full-stack application that demonstrates your understanding of the technology stack involving AI embeddings, a Spring Boot backend, and a React frontend. This exercise will help us assess your skills and understanding of essential concepts required for our projects. Use as much AI as needed but ensure to understand what you are building.

## Task Objectives

1. **Pinecone Account Setup**: 
   - Create a free account on [Pinecone.io](https://www.pinecone.io/).
   - Familiarize yourself with how Pinecone works and how to create a vector database.
   - Review the [Pinecone Documentation](https://docs.pinecone.io/) and [Getting Started Guide](https://docs.pinecone.io/docs/quickstart).

2. **AI Model for Embeddings**:
   - Choose a simple AI model to generate embeddings for text data (consider [OpenAI Embeddings](https://platform.openai.com/docs/guides/embeddings) or [Gemini](https://ai.google.dev/gemini-api/docs)).
   - Implement functionality to take in text and generate embeddings using the selected model.

3. **Spring Boot Backend**:
   - Set up a [Spring Boot](https://spring.io/projects/spring-boot) application that creates a simple REST API.
   - Refer to the [Spring Boot Documentation](https://spring.io/guides/gs/rest-service/) for building REST services.
   - The backend should:
     - Accept uploaded text from the React frontend.
     - Create embeddings for the text and store them in the Pinecone vector database.
     - Implement a simple endpoint to simulate a chatbot where:
       - A user can send a query.
       - The backend retrieves the top X relevant text pieces from Pinecone.
       - Formulates a brief response using the retrieved information.

4. **React Frontend**:
   - Create a basic [React](https://react.dev/) application that provides functionality for:
     - Uploading text.
     - Sending a user query to the backend.
     - Displaying responses from the "chatbot".
   - Ensure that the frontend is functional, the focus is on the implementation rather than the UI design.
   - Utilize AI to speed up the frontend creation.

## Requirements

- **No Database Layer**: For this task, no additional database is required. However, you can manage state within the backend if necessary.
- **Focus on Functionality**: While the UI does not need to be polished, ensure that the application works correctly and efficiently. (Use AI to generate quick frontend code )
- **Understanding**: You should be able to explain all parts of your code to the extent of what it does and why you made each decision.

## Deliverables

- A GitHub repository containing:
  - Spring Boot backend code.
  - React frontend code.
  - A `README.md` file with instructions on how to run the application.

## Evaluation Criteria

1. **Functionality**: Does the application work as intended?
2. **Code Quality**: Is the code clean, well-structured, and easy to understand?
3. **Understanding of Stack**: Does your implementation reflect an understanding of full-stack development principles?
4. **Code Understanding**: You should be able to explain what each part of your code does and justify your implementation decisions. Be prepared to discuss:
   - How different components interact with each other
   - Trade-offs you considered during development
   - Explain a function line by line.

We look forward to seeing your implementation!
