# Deploying to Coolify

This guide explains how to deploy your Vite React project to your Coolify server.

## Prerequisites
1.  **Git Repository**: Your project must be pushed to a Git repository (GitHub, GitLab, etc.).
2.  **Coolify Instance**: You must have a running Coolify server.

## Steps

### 1. Push Changes
Ensure you have committed and pushed the new files (`Dockerfile`, `nginx.conf`, `.dockerignore`) to your repository.

```bash
git add .
git commit -m "Add Docker deployment configuration"
git push origin main
```

### 2. Coolify Ekranında Seçim (Gönderdiğiniz Resim)
Gönderdiğiniz ekran görüntüsündeki **"Git Based"** bölümünü kullanacaksınız.

1.  **Repo Durumunuza Göre Seçim Yapın**:
    *   **Eğer reponuz herkese açık ise**: `Public Repository` kutusuna tıklayın.
    *   **Eğer reponuz gizli ise**: `Private Repository (with GitHub App)` kutusuna tıklayın (GitHub hesabınızı bağlamanız gerekir).
2.  **Repo Bilgileri**:
    *   Gelen ekranda Repository URL kısmına GitHub linkinizi yapıştırın (örn: `https://github.com/kullaniciadi/proje-adi`).
    *   **"Check Repository"** butonuna basın.
3.  **Build Pack Seçimi**:
    *   Coolify, projenizdeki **`Dockerfile`**'ı otomatik olarak algılayacaktır.
    *   Eğer sormazsa veya manuel seçmeniz gerekirse **"Dockerfile"** seçeneğini işaretleyin.

### 3. Ayarlar
*   **Port**: `80` (Dockerfile'da bu portu açtık).
*   **Deploy**: Sağ üstteki veya alttaki **Deploy** butonuna basarak işlemi başlatın.

### 5. Domain Setup
Once deployed, go to the **Settings** or **General** tab of your resource in Coolify and configure your custom domain (e.g., `cv.tufankoc.com`) so it points to the deployed container.
