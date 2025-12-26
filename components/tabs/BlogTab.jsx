"use client";
import { useState } from "react";
import { FaCalendar, FaArrowRight, FaClock, FaTimes, FaArrowLeft } from "react-icons/fa";

const posts = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Next.js 14",
    excerpt: "Next.js 14 introduces powerful features like Server Actions, improved caching, and partial prerendering. Learn how to leverage these features to build fast, scalable applications.",
    date: "Dec 2024",
    readTime: "8 min read",
    category: "Web Development",
    image: "⚡",
    content: `Next.js 14 has revolutionized how we build React applications. With the introduction of Server Actions, we can now handle form submissions and data mutations directly on the server without creating separate API routes.

## Why Next.js 14?

Next.js continues to push the boundaries of what's possible with React. The latest version brings several game-changing features that make building production-ready applications easier than ever.

## Key Features

### 1. Server Actions
Server Actions allow you to define asynchronous server functions that can be called directly from your components. This eliminates the need for creating API routes for simple data mutations.

\`\`\`javascript
async function createPost(formData) {
  'use server'
  const title = formData.get('title')
  await db.post.create({ data: { title } })
}
\`\`\`

### 2. Partial Prerendering
This experimental feature combines static and dynamic rendering in a single route, giving you the best of both worlds - fast initial loads with dynamic content.

### 3. Improved Caching
Next.js 14 introduces more granular caching controls, allowing you to specify exactly how and when your data should be cached.

## Best Practices

- Use Server Components by default for better performance
- Implement proper error boundaries
- Optimize images with next/image
- Use route handlers for complex API logic
- Deploy on Vercel for the best experience

## Conclusion

Next.js 14 is a significant step forward for React development. Whether you're building a simple blog or a complex e-commerce platform, these new features will help you deliver better user experiences.`
  },
  {
    id: 2,
    title: "Integrating African Payment Gateways: Paystack & Flutterwave",
    excerpt: "A comprehensive guide to implementing Paystack and Flutterwave payment solutions in your web applications for African markets.",
    date: "Nov 2024",
    readTime: "12 min read",
    category: "Backend",
    image: "💳",
    content: `Payment integration is crucial for any e-commerce platform targeting African markets. Both Paystack and Flutterwave offer robust APIs that support multiple payment methods including cards, bank transfers, and mobile money.

## Getting Started

Before you begin, you'll need to create merchant accounts on both platforms and obtain your API keys.

## Paystack Integration

### Step 1: Install the SDK
\`\`\`bash
npm install paystack-node
\`\`\`

### Step 2: Initialize Payment
\`\`\`javascript
const paystack = require('paystack-node')
const client = new paystack(process.env.PAYSTACK_SECRET_KEY)

async function initializePayment(email, amount) {
  const response = await client.transaction.initialize({
    email,
    amount: amount * 100, // Convert to kobo
    callback_url: 'https://yoursite.com/verify'
  })
  return response.data.authorization_url
}
\`\`\`

### Step 3: Verify Transaction
Always verify transactions on your server before fulfilling orders.

## Flutterwave Integration

Flutterwave offers similar functionality with support for more African countries.

### Initialize Payment
\`\`\`javascript
const Flutterwave = require('flutterwave-node-v3')
const flw = new Flutterwave(
  process.env.FLW_PUBLIC_KEY,
  process.env.FLW_SECRET_KEY
)

const payload = {
  tx_ref: 'unique_ref_' + Date.now(),
  amount: 1000,
  currency: 'NGN',
  redirect_url: 'https://yoursite.com/callback',
  customer: {
    email: 'customer@email.com'
  }
}
\`\`\`

## Webhook Handling

Both platforms send webhooks for transaction updates. Always:
- Verify webhook signatures
- Use HTTPS endpoints
- Respond with 200 status quickly
- Process asynchronously if needed

## Security Best Practices

1. Never expose secret keys on the frontend
2. Always verify transactions server-side
3. Implement idempotency for webhook handlers
4. Use environment variables for API keys
5. Log all transactions for auditing

## Conclusion

Both Paystack and Flutterwave are excellent choices for African payment integration. Choose based on your target markets and specific feature requirements.`
  },
  {
    id: 3,
    title: "Building RESTful APIs with Django REST Framework",
    excerpt: "Master the art of creating scalable and secure APIs using Django REST Framework. Covers authentication, serializers, viewsets, and best practices.",
    date: "Oct 2024",
    readTime: "10 min read",
    category: "Backend",
    image: "🔧",
    content: `Django REST Framework (DRF) is one of the most powerful tools for building Web APIs. It provides a flexible toolkit that makes it easy to build well-connected, self-describing RESTful APIs.

## Setting Up DRF

### Installation
\`\`\`bash
pip install djangorestframework
\`\`\`

### Configuration
Add to your settings.py:
\`\`\`python
INSTALLED_APPS = [
    ...
    'rest_framework',
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
}
\`\`\`

## Creating Serializers

Serializers convert complex data types to Python native datatypes that can be rendered into JSON.

\`\`\`python
from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'title', 'content', 'author', 'created_at']
        read_only_fields = ['author', 'created_at']
\`\`\`

## ViewSets and Routers

ViewSets combine the logic for multiple related views in a single class.

\`\`\`python
from rest_framework import viewsets
from .models import Article
from .serializers import ArticleSerializer

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
\`\`\`

## Authentication

JWT authentication is recommended for API security:

\`\`\`python
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view()),
    path('api/token/refresh/', TokenRefreshView.as_view()),
]
\`\`\`

## Best Practices

1. Use proper HTTP methods (GET, POST, PUT, DELETE)
2. Implement pagination for list endpoints
3. Use proper status codes
4. Version your API
5. Document with Swagger/OpenAPI

## Conclusion

DRF makes building robust APIs straightforward. Follow these patterns and you'll have a production-ready API in no time.`
  },
  {
    id: 4,
    title: "Mastering Tailwind CSS: Tips, Tricks & Best Practices",
    excerpt: "Take your Tailwind CSS skills to the next level with advanced techniques for creating stunning, responsive user interfaces.",
    date: "Sep 2024",
    readTime: "7 min read",
    category: "Frontend",
    image: "🎨",
    content: `Tailwind CSS has transformed how developers approach styling. Its utility-first approach enables rapid UI development while maintaining consistency across your application.

## Why Tailwind CSS?

- No context switching between HTML and CSS files
- Consistent design system out of the box
- Smaller production bundle sizes with PurgeCSS
- Highly customizable

## Custom Configuration

Extend the default theme in tailwind.config.js:

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}
\`\`\`

## Component Patterns

### Creating Reusable Components
\`\`\`jsx
function Button({ children, variant = 'primary' }) {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors'
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  }
  
  return (
    <button className={\`\${baseStyles} \${variants[variant]}\`}>
      {children}
    </button>
  )
}
\`\`\`

## Responsive Design

Tailwind's mobile-first approach makes responsive design intuitive:

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Cards -->
</div>
\`\`\`

## Dark Mode

Enable dark mode in your config:

\`\`\`javascript
module.exports = {
  darkMode: 'class',
  // ...
}
\`\`\`

Then use dark: prefix:
\`\`\`html
<div class="bg-white dark:bg-gray-800 text-black dark:text-white">
  Content
</div>
\`\`\`

## Performance Tips

1. Use @apply sparingly
2. Enable JIT mode for faster builds
3. Configure purge paths correctly
4. Use arbitrary values only when necessary

## Conclusion

Tailwind CSS is a powerful tool that, when used correctly, can significantly speed up your development workflow while maintaining clean, maintainable code.`
  },
  {
    id: 5,
    title: "React State Management: Context API vs Redux vs Zustand",
    excerpt: "Confused about which state management solution to use? This comparison helps you make the right choice for your project.",
    date: "Aug 2024",
    readTime: "9 min read",
    category: "Frontend",
    image: "⚛️",
    content: `Choosing the right state management solution can significantly impact your application's architecture and developer experience. Let's compare the most popular options.

## Context API

Built into React, perfect for simple state sharing.

### Pros
- No additional dependencies
- Simple API
- Good for theme/auth state

### Cons
- Can cause unnecessary re-renders
- Not ideal for frequent updates
- No built-in dev tools

### Example
\`\`\`jsx
const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
\`\`\`

## Redux Toolkit

The standard for complex applications.

### Pros
- Predictable state updates
- Excellent dev tools
- Large ecosystem
- Time-travel debugging

### Cons
- More boilerplate
- Steeper learning curve
- Overkill for simple apps

### Example
\`\`\`javascript
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
  },
})
\`\`\`

## Zustand

Lightweight and simple.

### Pros
- Minimal boilerplate
- Small bundle size (~1KB)
- No providers needed
- Works outside React

### Cons
- Smaller ecosystem
- Less structured

### Example
\`\`\`javascript
import create from 'zustand'

const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
}))
\`\`\`

## When to Use What?

- **Context API**: Theme, auth, simple global state
- **Redux**: Large apps, complex state logic, team projects
- **Zustand**: Medium apps, when you want simplicity

## Conclusion

There's no one-size-fits-all solution. Consider your app's complexity, team experience, and specific requirements when choosing.`
  },
  {
    id: 6,
    title: "Deploying Full-Stack Apps: From Development to Production",
    excerpt: "A step-by-step guide to deploying your full-stack applications with CI/CD pipelines, environment variables, and monitoring.",
    date: "Jul 2024",
    readTime: "15 min read",
    category: "DevOps",
    image: "🚀",
    content: `Deployment can be daunting for new developers. This guide demystifies the process and provides practical steps for getting your applications live.

## Choosing a Platform

### Vercel (Frontend/Next.js)
- Zero-config deployments
- Automatic HTTPS
- Edge functions
- Great for Next.js

### Railway (Full-Stack)
- Database hosting included
- Simple pricing
- Good for backends

### Traditional VPS
- Full control
- More setup required
- Cost-effective at scale

## CI/CD with GitHub Actions

Create .github/workflows/deploy.yml:

\`\`\`yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.ORG_ID }}
          vercel-project-id: \${{ secrets.PROJECT_ID }}
\`\`\`

## Environment Variables

Never commit secrets! Use:
- .env.local for development
- Platform's environment settings for production

\`\`\`bash
# .env.local
DATABASE_URL=postgresql://...
API_KEY=your_secret_key
\`\`\`

## Database Migrations

Always run migrations as part of deployment:

\`\`\`bash
# For Prisma
npx prisma migrate deploy

# For Django
python manage.py migrate
\`\`\`

## Monitoring

Set up monitoring from day one:
- Vercel Analytics for frontend
- Sentry for error tracking
- Uptime monitoring (UptimeRobot)

## SSL Certificates

Most platforms handle this automatically. For VPS:
\`\`\`bash
sudo certbot --nginx -d yourdomain.com
\`\`\`

## Checklist Before Going Live

1. ✅ Environment variables set
2. ✅ Database migrations run
3. ✅ SSL certificate active
4. ✅ Error tracking configured
5. ✅ Backup strategy in place
6. ✅ Performance tested

## Conclusion

Deployment doesn't have to be scary. Start with managed platforms, automate with CI/CD, and gradually learn more advanced techniques as your needs grow.`
  }
];

const BlogTab = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    return (
      <div>
        {/* Back Button */}
        <button
          onClick={() => setSelectedPost(null)}
          className="flex items-center gap-2 text-sm text-[var(--accent)] hover:underline mb-6"
        >
          <FaArrowLeft /> Back to all posts
        </button>

        {/* Article Header */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-xs px-2 py-1 bg-[var(--bg-primary)] text-[var(--accent)] rounded">
              {selectedPost.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
              <FaCalendar className="text-[10px]" /> {selectedPost.date}
            </span>
            <span className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
              <FaClock className="text-[10px]" /> {selectedPost.readTime}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">
            {selectedPost.title}
          </h2>
        </div>

        {/* Article Content */}
        <article className="prose prose-sm sm:prose max-w-none">
          <div className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap">
            {selectedPost.content.split('\n').map((paragraph, index) => {
              // Handle code blocks
              if (paragraph.startsWith('```')) {
                return null;
              }
              // Handle headers
              if (paragraph.startsWith('## ')) {
                return (
                  <h3 key={index} className="text-lg font-semibold text-[var(--text-primary)] mt-6 mb-3">
                    {paragraph.replace('## ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h4 key={index} className="text-base font-semibold text-[var(--text-primary)] mt-4 mb-2">
                    {paragraph.replace('### ', '')}
                  </h4>
                );
              }
              // Handle list items
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="ml-4 text-[var(--text-secondary)]">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              }
              if (paragraph.match(/^\d+\./)) {
                return (
                  <li key={index} className="ml-4 text-[var(--text-secondary)]">
                    {paragraph.replace(/^\d+\.\s*/, '')}
                  </li>
                );
              }
              // Regular paragraphs
              if (paragraph.trim()) {
                return (
                  <p key={index} className="mb-4 text-[var(--text-secondary)]">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </article>

        {/* Share Section */}
        <div className="mt-8 pt-6 border-t border-[var(--border-color)]">
          <p className="text-sm text-[var(--text-secondary)]">
            Found this helpful? Share it with others!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 pb-2 border-b-2 border-[var(--accent)] inline-block">
        Blog
      </h2>

      <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-6 sm:mb-8">
        Thoughts, tutorials, and insights on web development, backend engineering, and technology.
      </p>

      {/* Blog Posts */}
      <div className="space-y-4 sm:space-y-5">
        {posts.map((post) => (
          <article
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="group flex flex-col sm:flex-row gap-4 sm:gap-5 p-4 sm:p-5 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] hover:border-[var(--accent)] transition-all cursor-pointer"
          >
            {/* Post Image/Icon */}
            <div className="flex-shrink-0 w-full sm:w-20 h-16 sm:h-20 rounded-lg bg-[var(--bg-primary)] flex items-center justify-center text-3xl">
              {post.image}
            </div>

            {/* Post Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                <span className="text-[10px] sm:text-xs px-2 py-1 bg-[var(--bg-primary)] text-[var(--accent)] rounded">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-[10px] sm:text-xs text-[var(--text-secondary)]">
                  <FaCalendar className="text-[8px] sm:text-[10px]" /> {post.date}
                </span>
                <span className="flex items-center gap-1 text-[10px] sm:text-xs text-[var(--text-secondary)]">
                  <FaClock className="text-[8px] sm:text-[10px]" /> {post.readTime}
                </span>
              </div>

              <h3 className="font-semibold text-sm sm:text-base text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                {post.title}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>

              <span className="inline-flex items-center gap-1 mt-2 sm:mt-3 text-[10px] sm:text-xs text-[var(--accent)] font-medium">
                Read article <FaArrowRight className="text-[8px] sm:text-[10px]" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-gradient-to-r from-[var(--accent)]/10 to-[var(--accent)]/5 rounded-xl border border-[var(--accent)]/30">
        <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-2">Stay Updated</h3>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-4">
          Subscribe to get notified when I publish new articles on web development and tech.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg text-xs sm:text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
          />
          <button className="px-4 sm:px-6 py-2 sm:py-2.5 bg-[var(--accent)] text-black text-xs sm:text-sm font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogTab;
