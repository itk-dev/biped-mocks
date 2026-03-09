<template>
  <div class="compose">
    <div class="avatar you">JP</div>
    <div class="compose-box">
      <textarea
        v-model="text"
        class="compose-input"
        placeholder="Ask a question or share insights about this dataset..."
        rows="1"
        @input="autoGrow"
        ref="textarea"
      ></textarea>
      <div class="compose-actions">
        <button class="btn-attach"><Paperclip :size="14" :stroke-width="1.5" /> Attach</button>
        <button class="btn-comment" :disabled="!text.trim()" @click="submit">Post comment</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Paperclip } from 'lucide-vue-next'

const emit = defineEmits(['submit'])

const text = ref('')
const textarea = ref(null)

function autoGrow() {
  const el = textarea.value
  if (el) {
    el.style.height = 'auto'
    el.style.height = el.scrollHeight + 'px'
  }
}

function submit() {
  if (text.value.trim()) {
    emit('submit', text.value.trim())
    text.value = ''
    if (textarea.value) {
      textarea.value.style.height = 'auto'
    }
  }
}
</script>

<style scoped>
.compose {
  display: flex;
  gap: 12px;
  margin-bottom: 28px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--color-border-faintest);
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

.avatar.you {
  background: var(--color-text-dark);
}

.compose-box {
  flex: 1;
}

.compose-input {
  width: 100%;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-md);
  padding: 12px 16px;
  font-size: 14px;
  color: var(--color-text-body);
  resize: none;
  min-height: 48px;
  font-family: inherit;
  outline: none;
  transition: border 0.15s;
}

.compose-input:focus {
  border-color: var(--color-teal);
}

.compose-input::placeholder {
  color: var(--color-text-faint);
}

.compose-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
}

.btn-attach {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: 1px solid var(--color-border-light);
  color: var(--color-text-light);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: border-color 0.15s;
}

.btn-attach:hover {
  border-color: var(--color-text-muted);
}

.btn-comment {
  background: var(--color-teal);
  color: var(--color-white);
  border: none;
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
}

.btn-comment:hover:not(:disabled) {
  background: var(--color-mid);
}

.btn-comment:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
