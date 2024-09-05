# Use the official OpenJDK image as a parent image
FROM openjdk:17-jdk-slim as build

# Set the working directory in the container
WORKDIR /workspace/app

# Copy the Maven wrapper files
COPY mvnw .
COPY .mvn .mvn

# Copy the project files
COPY pom.xml .
COPY src src

# Make the mvnw script executable
RUN chmod +x mvnw

# Build the application
RUN ./mvnw install -DskipTests

# Create a new stage with a minimal image for the application
FROM openjdk:17-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the built artifact from the build stage
COPY --from=build /workspace/app/target/*.jar app.jar

# Expose the port the app runs on
EXPOSE 8080

# Run the jar file
CMD ["java", "-jar", "app.jar"]