# Use the official n8n image from Docker Hub
FROM n8nio/n8n

# Expose the default n8n port
EXPOSE 5678

# Optionally, you can add environment variables here if needed
# ENV EXAMPLE_VARIABLE=example_value

# The default command to run n8n
CMD ["n8n", "start"]
