import api from './api';

export const resumeService = {
  async getResumes() {
    const res = await api.get('/resumes');
    return res.data;
  },

  async getResumeById(id) {
    const res = await api.get(`/resumes/${id}`);
    return res.data.resume;
  },

  async createResume(data = {}) {
    const res = await api.post('/resumes', data);
    return res.data.resume;
  },

  async updateResume(id, data) {
    const res = await api.put(`/resumes/${id}`, data);
    return res.data.resume;
  },

  async deleteResume(id) {
    const res = await api.delete(`/resumes/${id}`);
    return res.data;
  },

  async updateTemplate(id, { selectedTemplate, themeColor }) {
    const res = await api.patch(`/resumes/${id}/template`, {
      selectedTemplate,
      themeColor,
    });
    return res.data.resume;
  },
};

export default resumeService;
