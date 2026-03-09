<template>
  <div>
    <div class="comment">
      <div class="avatar" :style="{ background: comment.avatarColor }">{{ comment.initials }}</div>
      <div class="comment-body">
        <div class="comment-meta">
          <span class="comment-author">{{ comment.author }}</span>
          <span v-if="comment.role" class="comment-role">{{ comment.role }}</span>
          <span class="comment-time">{{ comment.time }}</span>
        </div>
        <div class="comment-text">{{ comment.text }}</div>
        <div class="comment-actions">
          <span class="comment-action"><ThumbsUp :size="14" :stroke-width="1.5" /> {{ comment.likes }}</span>
          <span class="comment-action"><MessageCircle :size="14" :stroke-width="1.5" /> Reply</span>
          <span class="comment-action"><Link :size="14" :stroke-width="1.5" /> Share</span>
        </div>
      </div>
    </div>

    <!-- Replies -->
    <div v-if="comment.replies && comment.replies.length" class="reply-thread">
      <div v-for="reply in comment.replies" :key="reply.author" class="reply">
        <div class="avatar reply-avatar" :style="{ background: reply.avatarColor }">{{ reply.initials }}</div>
        <div class="comment-body">
          <div class="reply-meta">
            <span class="reply-author">{{ reply.author }}</span>
            <span v-if="reply.role" class="comment-role reply-role">{{ reply.role }}</span>
            <span class="reply-time">{{ reply.time }}</span>
          </div>
          <div class="reply-text">{{ reply.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ThumbsUp, MessageCircle, Link } from 'lucide-vue-next'

defineProps({
  comment: Object,
})
</script>

<style scoped>
.comment {
  display: flex;
  gap: 12px;
  padding: 20px 0;
  border-bottom: 1px solid var(--color-border-row);
}

.comment:last-child {
  border-bottom: none;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: var(--color-white);
}

.comment-body {
  flex: 1;
}

.comment-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
  flex-wrap: wrap;
}

.comment-author {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-darkest);
}

.comment-role {
  font-size: 10px;
  color: var(--color-teal);
  background: var(--color-accent-green-bg);
  padding: 1px 8px;
  border-radius: 8px;
  font-weight: 600;
}

.comment-time {
  font-size: 12px;
  color: var(--color-text-faint);
}

.comment-text {
  font-size: 14px;
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 8px;
}

.comment-actions {
  display: flex;
  gap: 16px;
}

.comment-action {
  font-size: 12px;
  color: var(--color-text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.15s;
}

.comment-action:hover {
  color: var(--color-teal);
}

/* Reply thread */
.reply-thread {
  margin-left: 52px;
  padding-left: 16px;
  border-left: 2px solid var(--color-border-faintest);
}

.reply {
  display: flex;
  gap: 10px;
  padding: 12px 0;
}

.reply-avatar {
  width: 32px;
  height: 32px;
  font-size: 11px;
}

.reply-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
  flex-wrap: wrap;
}

.reply-author {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-darkest);
}

.reply-role {
  font-size: 9px;
}

.reply-time {
  font-size: 11px;
  color: var(--color-text-faint);
}

.reply-text {
  font-size: 13px;
  color: var(--color-text-secondary);
  line-height: 1.5;
}
</style>
