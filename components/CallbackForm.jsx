import { useState } from 'react'
import {
  Alert, Box, Button, Card, CardContent, CircularProgress, Snackbar,
  TextField, Typography,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { usePageContext } from 'vike-react/usePageContext'
import { sendCallback } from '../lib/api.js'

export default function CallbackForm({ withEmail = false, title = 'Обсудим вашу закупку' }) {
  const pageContext = usePageContext()
  const [form, setForm] = useState({ name: '', phone: '', message: '', email: '' })
  const [status, setStatus] = useState({ loading: false, sent: false, error: null })
  const onChange = (field) => (event) => setForm((current) => ({ ...current, [field]: event.target.value }))

  const onSubmit = async (event) => {
    event.preventDefault()
    setStatus({ loading: true, sent: false, error: null })
    try {
      await sendCallback(pageContext.apiBase, { ...form, source: pageContext.urlPathname })
      setStatus({ loading: false, sent: true, error: null })
      setForm({ name: '', phone: '', message: '', email: '' })
    } catch {
      setStatus({ loading: false, sent: false, error: 'Не удалось отправить заявку. Позвоните нам: (3852) 52-97-96.' })
    }
  }

  return (
    <Card id="callback" variant="outlined" sx={{ scrollMarginTop: 110, boxShadow: '0 16px 40px rgba(16,42,67,0.07)' }}>
      <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
        <Typography variant="h3" component="h2" sx={{ mb: 1.5 }}>{title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Опишите задачу и оставьте телефон. Специалист свяжется с вами в рабочее время.
        </Typography>
        <Box component="form" onSubmit={onSubmit} noValidate={false}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: withEmail ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)' }, gap: 2 }}>
            <TextField required fullWidth label="Ваше имя" name="name" autoComplete="name" value={form.name} onChange={onChange('name')} />
            <TextField required fullWidth label="Телефон" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+7 (___) ___-__-__" value={form.phone} onChange={onChange('phone')} />
            {withEmail && <TextField fullWidth label="Email" name="email" type="email" inputMode="email" autoComplete="email" value={form.email} onChange={onChange('email')} />}
          </Box>
          <TextField
            required fullWidth multiline minRows={3} label="Коротко о задаче" name="message"
            helperText="Например: подготовка заявки, сопровождение закупки или оформление ЭЦП"
            value={form.message} onChange={onChange('message')} sx={{ mt: 2 }}
          />
          <Button
            type="submit" variant="contained" size="large" disabled={status.loading}
            endIcon={status.loading ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
            sx={{ mt: 3, width: { xs: '100%', sm: 'auto' } }}
          >
            {status.loading ? 'Отправляем…' : 'Заказать звонок'}
          </Button>
          <Typography variant="caption" component="p" sx={{ mt: 2 }}>
            Нажимая кнопку, вы соглашаетесь на обработку данных для ответа на обращение.
          </Typography>
        </Box>
      </CardContent>
      <Snackbar open={status.sent} autoHideDuration={5000} onClose={() => setStatus((current) => ({ ...current, sent: false }))}>
        <Alert severity="success" variant="filled">Заявка отправлена. Мы свяжемся с вами в рабочее время.</Alert>
      </Snackbar>
      <Snackbar open={Boolean(status.error)} autoHideDuration={7000} onClose={() => setStatus((current) => ({ ...current, error: null }))}>
        <Alert severity="error" variant="filled">{status.error}</Alert>
      </Snackbar>
    </Card>
  )
}
