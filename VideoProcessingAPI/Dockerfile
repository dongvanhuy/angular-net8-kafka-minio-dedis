# VideoProcessingAPI/Dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["VideoProcessingAPI/VideoProcessingAPI.csproj", "VideoProcessingAPI/"]  # Đường dẫn chính xác
RUN dotnet restore "VideoProcessingAPI/VideoProcessingAPI.csproj"
COPY ["VideoProcessingAPI/.","VideoProcessingAPI/"]  # Sao chép tất cả các tệp mã nguồn
WORKDIR "/src/VideoProcessingAPI"
RUN dotnet build "VideoProcessingAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "VideoProcessingAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish . 
ENTRYPOINT ["dotnet", "VideoProcessingAPI.dll"]
