<script setup lang="js">
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'
import { useRouter } from 'vitepress'

const { page } = useData()
const router = useRouter()

// 评论数据
const comments = ref([])
const newComment = ref('')
const replyTo = ref(null)
const showEmojiPicker = ref(false)

// 表情列表
const emojis = [
  '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣',
  '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰'
]

// 加载评论
const loadComments = async () => {
  try {
    const response = await fetch(`/comments/${page.value.relativePath.replace('.md', '.json')}`)
    if (response.ok) {
      const data = await response.json()
      comments.value = data.comments || []
    }
  } catch (error) {
    console.error('加载评论失败:', error)
    comments.value = []
  }
}

// 添加评论
const addComment = () => {
  if (!newComment.value.trim()) return
  
  const comment = {
    id: Date.now(),
    content: newComment.value,
    author: 'Anonymous', // 后续可添加用户系统
    date: new Date().toLocaleString(),
    replies: []
  }

  if (replyTo.value) {
    const parentComment = comments.value.find(c => c.id === replyTo.value)
    if (parentComment) {
      parentComment.replies.push(comment)
    }
    replyTo.value = null
  } else {
    comments.value.push(comment)
  }

  newComment.value = ''
  saveComments()
}

// 保存评论到本地文件
const saveComments = async () => {
  try {
    const filePath = `/comments/${page.value.relativePath.replace('.md', '.json')}`
    const response = await fetch(filePath, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comments: comments.value })
    })

    if (!response.ok) {
      throw new Error('保存评论失败')
    }

    console.log('评论保存成功')
  } catch (error) {
    console.error("保存评论失败:", error)
  }
}

// 添加表情
const addEmoji = (emoji) => {
  newComment.value += emoji
  showEmojiPicker.value = false
}

// 回复评论
const reply = (commentId) => {
  replyTo.value = commentId
}

onMounted(() => {
  loadComments()
})
</script>

<template>
  <div class="comments-section">
    <h3>评论</h3>
    <!-- 评论输入框 -->
    <div class="comment-form">
      <textarea
        v-model="newComment"
        placeholder="写下你的评论..."
        rows="3"
      ></textarea>
      
      <!-- 表情选择器 -->
      <div class="emoji-picker">
        <button @click="showEmojiPicker = !showEmojiPicker" class="emoji-btn">😊</button>
        <div v-if="showEmojiPicker" class="emoji-list">
          <span
            v-for="emoji in emojis"
            :key="emoji"
            @click="addEmoji(emoji)"
            class="emoji"
          >
            {{ emoji }}
          </span>
        </div>
      </div>

      <button @click="addComment" class="submit-btn">发表评论</button>
    </div>
        <!-- 评论列表 -->
    <div class="comments-list">
      <div v-for="comment in comments" :key="comment.id" class="comment">
        <div class="comment-content">
          <div class="comment-header">
            <span class="comment-author">{{ comment.author }}</span>
            <span class="comment-date">{{ comment.date }}</span>
          </div>
          <p>{{ comment.content }}</p>
          <button class="reply-btn" @click="reply(comment.id)">回复</button>
        </div>
        
        <!-- 回复列表 -->
        <div v-if="comment.replies && comment.replies.length" class="replies">
          <div v-for="reply in comment.replies" :key="reply.id" class="reply">
            <div class="comment-header">
              <span class="comment-author">{{ reply.author }}</span>
              <span class="comment-date">{{ reply.date }}</span>
            </div>
            <p>{{ reply.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comments-section {
  margin-top: 2rem;
  padding: 1rem;
}

.comments-list {
  margin: 1rem 0;
}

.comment {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.comment-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  gap: 1rem;
}

.comment-author {
  font-weight: 500;
  color: var(--vp-c-brand);
}

.comment-date {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
}

.replies {
  margin-left: 2rem;
  margin-top: 1rem;
}

.reply {
  padding: 0.8rem;
  margin-top: 0.8rem;
  background: var(--vp-c-bg);
  border-radius: 6px;
}

.comment-form {
  margin-top: 1.5rem;
}

textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text);
  resize: vertical;
}

.emoji-picker {
  position: relative;
  display: inline-block;
  margin: 0.5rem 0;
}

.emoji-btn {
  padding: 0.4rem 0.8rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.2rem;
}

.emoji-list {
  position: absolute;
  bottom: 100%;
  left: 0;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 0.3rem;
}

.emoji {
  cursor: pointer;
  padding: 0.3rem;
  text-align: center;
  transition: transform 0.2s;
}

.emoji:hover {
  transform: scale(1.2);
}

.submit-btn {
  margin-top: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-btn:hover {
  background: var(--vp-c-brand-dark);
}

.reply-btn {
  padding: 0.3rem 0.6rem;
  background: none;
  border: 1px solid var(--vp-c-brand);
  color: var(--vp-c-brand);
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  transition: all 0.2s;
}

.reply-btn:hover {
  background: var(--vp-c-brand);
  color: white;
}
</style>